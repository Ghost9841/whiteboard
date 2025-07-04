import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

const SearchButton = () => {
    return (

        <div className="p-3 border-b border-gray-200">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                    placeholder="Search..."
                    className="pl-9 h-8"
                />
            </div>
        </div>
    )
}

export default SearchButton;
