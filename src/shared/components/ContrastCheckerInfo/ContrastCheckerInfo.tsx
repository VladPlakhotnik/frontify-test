import type { BlocksColorType } from '../../constants/mainVariables'
import type { Settings } from '../../blocks/UIBlocks'
import type { AppBridgeBlock, BlockState } from '@frontify/app-bridge'

import React from 'react'
import { useGetContrastChecker } from '../../api/useGetContrastChecker'
import { conformanceLevels } from '../../constants/mainVariables'
import { useBlockSettings } from '@frontify/app-bridge'

import {
    AA,
    AAA,
    Contrast,
    ContrastDetails,
    Span,
    Strong,
} from './ContrastCheckerInfo.styles'

interface ContrastCheckerInfoProps {
    wcagBlocks: BlocksColorType[]
    appBridge: AppBridgeBlock<BlockState>
}

export const ContrastCheckerInfo: React.FC<ContrastCheckerInfoProps> = ({
    wcagBlocks,
    appBridge,
}) => {
    const [blockSettings] = useBlockSettings<Settings>(appBridge)
    const { data, loading } = useGetContrastChecker({
        fColor: wcagBlocks[0].color,
        bColor: wcagBlocks[1].color,
    })

    return (
        <Contrast>
            <div>
                <p>Contrast radio</p>
                <Span>{loading ? 'Loading...' : `${data?.ratio}`}</Span>
            </div>
            <ContrastDetails>
                <Strong>{conformanceLevels.normalText}</Strong>
                <AAA validate={data?.AAA} isShowAAA={blockSettings.isShowAAA}>
                    AAA
                </AAA>
                <AA validate={data?.AA} isShowAA={blockSettings.isShowAA}>
                    AA
                </AA>
            </ContrastDetails>
            <ContrastDetails>
                <Strong>{conformanceLevels.graphicalObj}</Strong>
                <AAA isShowAAA={blockSettings.isShowAAA}>AAA</AAA>
                <AA isShowAA={blockSettings.isShowAA}>AA</AA>
            </ContrastDetails>
            <ContrastDetails>
                <Strong>{conformanceLevels.largeText}</Strong>
                <AAA
                    validate={data?.AAALarge}
                    isShowAAA={blockSettings.isShowAAA}
                >
                    AAA
                </AAA>
                <AA validate={data?.AALarge} isShowAA={blockSettings.isShowAA}>
                    AA
                </AA>
            </ContrastDetails>
        </Contrast>
    )
}
