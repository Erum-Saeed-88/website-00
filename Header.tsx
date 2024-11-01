export default function Header () {
    return (
            <div className="flex justify-between px-2 shadow 2x1 bg-slate-300"> 
            <div className="font-bold">LOGO</div>
            <div className="flex gap-20">

        <div className="font-bold cursor-pointer"> HOME </div>
        <div className="font-bold cursor-pointer"> ABOUT US </div>
        <div className="font-bold cursor-pointer"> SERVICES </div>
        <div className="font-bold cursor-pointer"> PRIVACY </div>

      </div>
      </div>
    )
}