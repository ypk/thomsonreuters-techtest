'use client';

export function ErrorMessage({ message }: { message: string }) {
  return (
    <>
      <p>This is from Error Message Component</p>
      <p> {message}</p>
    </>
  );
}
