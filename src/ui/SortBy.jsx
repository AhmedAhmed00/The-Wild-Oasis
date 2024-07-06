import React, { useState } from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom'

export default function SortBy({ options }) {

    return (
        <Select options={options} type='white' />
    )
}

