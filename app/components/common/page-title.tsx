export default function PageTitle({
  children,
  titleName,
}: {
  children: React.ReactNode;
  titleName: string;
}) {
  return (
    <div className='flex items-center gap-2 pb-8'>
      {children}
      <h1 className='text-xl font-bold'>{titleName}</h1>
    </div>
  );
}
