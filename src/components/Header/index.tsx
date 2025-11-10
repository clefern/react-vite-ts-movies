import Logo from "../Logo"
import HeaderActions from "./componentes/HeaderAction"
import HeaderFormFilters from "./componentes/HeaderFormFilters"
import HeaderLinks from "./componentes/HeaderLinks"
import HeaderList from "./componentes/HeaderList"
import HeaderListItem from "./componentes/HeaderListItem"

const Header = () => {
    return (
        <header>
            <HeaderList>
                <HeaderListItem>
                    <Logo src='/logo.png' />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderLinks />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderFormFilters />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderActions />
                </HeaderListItem>
            </HeaderList>
        </header>
    )
}

export default Header