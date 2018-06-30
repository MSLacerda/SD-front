import React, { Component } from 'react'
import { Menu ,Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu pointing secondary>
                <Container>
                <Menu.Item 
                    as={Link}
                    to='/'
                    name='home' 
                    active={activeItem === 'home'} 
                    onClick={this.handleItemClick} 
                />
                <Menu.Item
                    as={Link}
                    to='/ta'
                    name='TA'
                    target="_blank"
                    active={activeItem === 'TA'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to='/ts'
                    name='TS'
                    target="_blank"
                    active={activeItem === 'TS'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to='/tv'
                    name='TV'
                    target="_blank"
                    active={activeItem === 'TV'}
                    onClick={this.handleItemClick}
                />
                </Container>
            </Menu>
        )
    }
}