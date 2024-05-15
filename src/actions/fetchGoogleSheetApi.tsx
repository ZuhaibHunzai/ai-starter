"use server";
import { google } from "googleapis";

export async function fetchGoogleSheetData(columnLetter: string) {
  // Use type assertion to tell TypeScript that these environment variables will be defined
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL as string;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY as string;
  const spreadsheetId = process.env.SPREADSHEET_ID as string;

  // Check if the environment variables are defined
  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error("Required environment variables are not set.");
  }

  const auth = new google.auth.JWT(
    clientEmail,
    "",
    privateKey.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  const sheets = google.sheets({ version: "v4", auth });

  const range = `工作表1!${columnLetter}2:${columnLetter}`;
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const columnData = response.data.values?.map((row) => row[0]) || [];

  let maxNumber = null;
  if (columnLetter === "B") {
    maxNumber = Math.max(...columnData);
  }

  return { columnData, maxNumber };
}
