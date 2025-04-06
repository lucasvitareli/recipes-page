import React from 'react';

import { SearchBarContainer,
        Label,
        Input,
        Button,
    
    } from './style';

function SearchBar() {
    return (
        <SearchBarContainer>
            <Label>Looking for anything specific?</Label>
            <Input type="text" placeholder="Type here..." />
            <Button type="submit">Search</Button>
        </SearchBarContainer>
    );
}

export default SearchBar;