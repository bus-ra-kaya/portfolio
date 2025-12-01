interface DropdownMenuProps {
    readonly menuName: string;
    readonly menuIcon: string;
    readonly menuItems: string[];
	readonly open: boolean;
	onToggle: () => void;
	setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

export default function DropdownMenu({menuName, menuIcon, menuItems, open, onToggle, setActiveItem}: DropdownMenuProps){


  return (
	<>
	{open && <div className="dropdown-overlay" onClick={() => onToggle()}></div>}
    <div className="dropdown-container">
      <button className="project-btn" onClick={() => onToggle()}>
				<div className={`${menuIcon} icon`}></div>
				{menuName}
      </button>

			{open && (
				<div className="dropdown-menu">
					{menuItems.map((i) => (
						<button  className="dropdown-btn" key={i}
						onClick = { () => {
							onToggle();
							setActiveItem(i);
						}
						}>
							{i}
						</button>
					))}
				</div>
			)}
    </div>
	</>
    )
}