export default function Section({
  className,
  customPaddings,
  children,
}: {
  className?: string;
  customPaddings?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`realtive ${customPaddings || "py-10 lg:py-16 xl:py-20"} ${
        className || ""
      }`}
    >
      {children}
    </section>
  );
}
