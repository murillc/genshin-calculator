import { Link, Stack } from "@chakra-ui/react"

interface Props {}


const MenuItem = ({ to = "/" }) => {
    return (
      <Link href={to}>
        {children}
      </Link>
    )
}

const Navbar = (props: Props) => {
    return (
        <Stack>
            <MenuItem to = "/characters">Characters</MenuItem>
            <MenuItem to = "/calculator">Calculator</MenuItem>
        </Stack>
    )
}

export default Navbar