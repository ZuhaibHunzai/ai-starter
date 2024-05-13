export default function IdoCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div
        className={`w-full  h-auto py-8 px-6 bg-[#2A2B32] rounded-br-2xl rounded-bl-2xl md:rounded-lg `}
      >
        <h1></h1>
        {children}
      </div>
    </main>
  );
}
