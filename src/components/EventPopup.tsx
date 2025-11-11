import { Button } from './ui/button';

type EventProps = {
  title: string;
  text: string;
  callback: Function;
};

export default function EventPopup({ title, text, callback }: EventProps) {
  return (
    <div className="fixed inset-0 flex justify-center items-center w-80 h-50 z-50">
      <div className="bg-accent rounded shadow p-5 w-full h-full flex flex-col justify-between items-center">
        <h1>{title}</h1>
        <p>{text}</p>
        <Button onClick={() => callback(false)}>OK</Button>
      </div>
    </div>
  );
}
