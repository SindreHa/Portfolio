import React from 'react'

export default function MenuToggle(props: any) {
    const menuOpen = props.menuOpen;
    return (
        <div id="menu" onClick={() => props.setOpen(!menuOpen)}>
            <div className={menuOpen ? "hamburger-icon open" : "hamburger-icon"}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
