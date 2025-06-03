export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">This is a test</li>
          <li className="tracking-[-.01em] font-roboto">
            to check if tailwind is working correctly
          </li>
        </ol>
      </main>
    </div>
  );
}
