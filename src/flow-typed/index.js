// @flow

declare type ThemeColorTypes =
    | 'primary'
    | 'secondary'
    | 'info'
    | 'default'
    | 'success'
    | 'warning'

declare type FontSizeType =
    | 'xxSmall'
    | 'xSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xLarge'
    | 'xxLarge'
    | number

declare type IconSizeType =
    | 'xxSmall'
    | 'xSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xLarge'
    | 'xxLarge'
    | number

declare type GlobalColorType =
    | 'white'
    | 'black'
    | 'warningColor'
    | 'secondaryExtraDark'
    | 'secondaryDark'
    | 'secondarySemiDark'
    | 'secondary'
    | 'secondarySemiLight'
    | 'secondaryLight'
    | 'secondaryExtraLight'
    | 'secondaryUltraLight'
    | 'primaryExtraDark'
    | 'primaryDark'
    | 'primarySemiDark'
    | 'primary'
    | 'primarySemiLight'
    | 'primaryLight'
    | 'primaryExtraLight'
    | 'green'
    | 'purple'
    | 'yellow'
    | 'coral'
    | 'cyan'
    | 'red'

declare type OptionValueType = string | number
declare type OptionType = { label: OptionValueType, value: OptionValueType }
