interface ChildProps {
    color: string;
};

export const Child = ({ color }: ChildProps) => {
    return <div>{color}</div>;
};

export const ChildAsAAA: React.FC<ChildProps> = ({ color }) => { //make typescript understand it's a react component
    return <div>{color}</div>;
};