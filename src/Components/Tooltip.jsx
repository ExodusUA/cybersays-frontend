function Tooltip({ close, children }) {
    return (
        <>
            {children}
            <p className="underline" onClick={e => close(true)}>Close</p>
        </>
    )
}

export default Tooltip
