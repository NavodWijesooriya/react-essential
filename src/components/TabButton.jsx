export default function TabButton({ children }) {
    function handleClick() {
        console.log('Hello Wold!');
    }


    return (

        <li>
            <button onClick={handleClick}>{children}</button>

            </li>

    );
}