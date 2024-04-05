type HeaderProps = {
  title: string;
  type?: HeaderTypes;
};

export enum HeaderTypes {
  rich = "font-black text-6xl text-center border-teal-300 border-4",
  poor = "text-4xl font-mono font-semibold italic",
}

export default function Header({
  title,
  type = HeaderTypes.poor,
}: HeaderProps) {
  return <header className={type}>{title}</header>;
}
