export default function SideBar() {
    return (
        <div id="sideBar">
            <div className="sideBarLink">
                <p className="arrow"> {">"} </p> <p>Search Galleries</p>
            </div>
            <div className="sideBarLink">
                <p className="arrow"> {">"} </p> <p>Account Settings</p>
            </div>
            <div className="sideBarLink">
                <p className="arrow"> {">"} </p> <p>Your Gallery</p>
            </div>
        </div>
    );
}
