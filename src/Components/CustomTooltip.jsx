function CustomTooltip({ open, setOpen, children }) {
    return (
        <div className={`absolute min-w-[370px] right-0 bg-white p-4 rounded-[22px] duration-300 z-[999999999999] ${open === true ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
             <p className="underline text-black cursor-pointer" onClick={e => setOpen(false)}>Close</p>
            {children}
        </div>
    )
}

export default CustomTooltip
