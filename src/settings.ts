import type { Bundle } from '@frontify/guideline-blocks-settings'

import { defineSettings } from '@frontify/guideline-blocks-settings'

const getBlockType = (bundle: Bundle) => {
    return bundle.getBlock('type')?.value === 'grid'
}

export const settings = defineSettings({
    main: [
        {
            id: 'type',
            type: 'segmentedControls',
            defaultValue: 'grid',
            choices: [
                { label: 'Grid', value: 'grid' },
                { label: 'WCAG', value: 'wcag' },
            ],
        },
    ],
    layout: [
        {
            id: 'layout',
            type: 'segmentedControls',
            defaultValue: '3',
            show: bundle => getBlockType(bundle),
            choices: [
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
            ],
        },
        {
            id: 'isColorCode',
            type: 'switch',
            label: 'Show color code',
            defaultValue: true,
        },
        {
            id: 'isShowBorder',
            type: 'switch',
            label: 'Show border',
            defaultValue: true,
        },
    ],
    WCAG: [
        {
            id: 'wcag',
            type: 'segmentedControls',
            defaultValue: 'aaa',
            show: bundle => getBlockType(bundle),
            choices: [
                { label: 'AA', value: 'aa' },
                { label: 'AAA', value: 'aaa' },
            ],
        },
        {
            id: 'isShowAAA',
            type: 'switch',
            label: 'Show AAA',
            show: bundle => !getBlockType(bundle),
            defaultValue: true,
        },
        {
            id: 'isShowAA',
            type: 'switch',
            label: 'Show AA',
            show: bundle => !getBlockType(bundle),
            defaultValue: true,
        },
    ],
    Targets: [
        {
            id: 'targets',
            type: 'segmentedControls',
            defaultValue: 'viewer',
            choices: [
                { label: 'All vieweres', value: 'viewer' },
                { label: 'Targeted', value: 'target' },
            ],
        },
    ],
})
