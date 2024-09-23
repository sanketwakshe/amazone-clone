function printHello(){
    console.log("sanket wakshe");
}
function printBye(){
    console.log("BYE");
}

export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me</button>
            <p onMouseOver={printBye}>
                Lorem, ipsum dolor sit amet consectetur
                 adipisicing elit. Illum deserunt quisquam dolores
                  ducimus ipsam facilis architecto sint dolorum quod.
                   Distinctio, ab pariatur. Deleniti repellat delectus, officiis
                    nam nisi modi cupiditate!</p>
        </div>
    );
}
