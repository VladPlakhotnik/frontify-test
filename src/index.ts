import { defineBlock } from '@frontify/guideline-blocks-settings'

import { UIBlocks } from './shared/blocks/UIBlocks'
import { settings } from './settings'

export default defineBlock({
    block: UIBlocks,
    settings,
})
