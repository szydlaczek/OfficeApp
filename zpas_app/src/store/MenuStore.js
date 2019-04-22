export  const Menus = [
    {
        id: 1,
        name : "administrator",
        displayName: "Menu Administratora",
        subMenus: [
            {
                id: 1,
                name: "users",
                displayName: "All users",
                url: "/administrator/users"
            },
            {
                id: 2,
                name: "roles",
                displayName: "All roles",
                url: "/administrator/roles"
            }
        ]
    },
    {
        id: 2,
        name : "kadry",
        displayName: "Menu kadr",
        subMenus: [
            {
                id: 1,
                name: "wprowadzone",
                displayName: "Delegacje wprowadzone",
                url: "/kadry/wprowadzone"
            },
            {
                id: 2,
                name: "niewprowadzon",
                displayName: "Delegacje niewprowadzone",
                url: "/kadry/niewprowadzone"
            }
        ]
    },
]