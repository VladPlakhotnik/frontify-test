import type { BlockProps } from '@frontify/guideline-blocks-settings'
import type { Settings } from './UIBlocks.types'

import React from 'react'
import { useBlockSettings } from '@frontify/app-bridge'
import {
    ABCLeft,
    ABCRight,
    Box,
    ColorCode,
    Container,
    ContainerABC,
    Grid,
    GridBlock,
    Strong,
    WCAG,
    WCAGBlock,
} from './UIBlocks.styles'

import { blocksColor } from '../../constants/mainVariables'
import { ContrastCheckerInfo } from '../../components/ContrastCheckerInfo'

export const UIBlocks: React.FC<BlockProps> = ({ appBridge }) => {
    const [blockSettings] = useBlockSettings<Settings>(appBridge)
    const wcagBlocks = blocksColor.slice(0, 2)

    return (
        <Container>
            {blockSettings.type === 'grid' ? (
                <Grid>
                    {blocksColor.map((block, idx) => (
                        <GridBlock
                            key={`gridBlock-${idx}`}
                            layout={blockSettings.layout}
                        >
                            <Box
                                color={block.color}
                                isShowBorder={blockSettings.isShowBorder}
                            >
                                <ABCLeft>Abc</ABCLeft>
                                <ABCRight>Abc</ABCRight>
                            </Box>
                            <ColorCode isColorCode={blockSettings.isColorCode}>
                                <Strong>{block.label}</Strong>#{block.color}
                            </ColorCode>
                        </GridBlock>
                    ))}
                </Grid>
            ) : (
                <WCAG>
                    {wcagBlocks.map((block, idx) => (
                        <WCAGBlock
                            key={`wcagBlock-${idx}`}
                            color={block.color}
                            isShowBorder={blockSettings.isShowBorder}
                        >
                            <ContainerABC>
                                <ABCLeft>Abc</ABCLeft>
                                <ABCRight>Abc</ABCRight>
                            </ContainerABC>
                            <ColorCode isColorCode={blockSettings.isColorCode}>
                                <Strong>{block.label}</Strong>
                                <p>#{block.color}</p>
                            </ColorCode>
                        </WCAGBlock>
                    ))}
                    <ContrastCheckerInfo
                        wcagBlocks={wcagBlocks}
                        appBridge={appBridge}
                    />
                </WCAG>
            )}
        </Container>
    )
}
