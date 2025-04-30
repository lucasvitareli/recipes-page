import React from 'react';

import {
    SearchBarContainer,
    Label,
    Input,
} from './style';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <SearchBarContainer>
            <Label>Looking for anything specific?</Label>
            <Input
                type="text"
                placeholder="Type here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </SearchBarContainer>
    );
}

export default SearchBar;