export default function TypeAnimationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="bg-code-camp bg-cover bg-center min-h-screen items-center flex justify-center">
      <section>{children}</section>
    </article>
  );
}
