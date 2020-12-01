import React from 'react'
import Svg, { Path } from 'react-native-svg'
import OldPhone from '../../services/UI/OldPhone/OldPhone'
import { Image } from 'react-native'

function SvgComponent(props) {
    const ifSelectStyle = props.ifSelectStyle || false
    if (OldPhone.isOldPhone()) {
        return (
            <Image
                width={44} height={26}
                resizeMode='stretch'
                source={ifSelectStyle ? require('./mastercard_2.png') : require('./mastercard.png')}/>
        )
    }
    return (
        <Svg width={44} height={26} viewBox="0 0 118 74" {...props}>
            <Path fill="#FF5F00" d="M43.425 8.642h31.5v56.6h-31.5z"/>
            <Path
                fill="#EB001B"
                d="M45.425 37.042c0-11 5.1-21.5 13.8-28.3-15.7-12.3-38.4-9.6-50.6 6s-9.6 38.3 6 50.6c13.1 10.3 31.4 10.3 44.5 0-8.7-6.9-13.8-17.3-13.7-28.3z"
            />
            <Path
                fill="#F79E1B"
                d="M117.325 37.042c0 19.9-16.1 36-36 36-8.1 0-15.9-2.7-22.2-7.7 15.6-12.3 18.3-35 6.1-50.6-1.8-2.3-3.8-4.3-6.1-6.1 15.6-12.3 38.3-9.6 50.6 6.1 4.9 6.3 7.6 14.2 7.6 22.3z"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#FFF"
                d="M81.187 29.094l-.589 3.658c-1.307-.653-2.221-.914-3.201-.914-2.743 0-4.637 2.614-4.637 6.337 0 2.548 1.307 4.115 3.396 4.115.915 0 1.895-.26 3.071-.849l-.652 3.855c-1.307.327-2.155.458-3.201.458-3.855 0-6.272-2.745-6.272-7.252 0-6.076 3.331-10.256 8.1-10.256.654 0 1.176.065 1.634.13l1.502.392c.456.195.522.195.849.326zm-11.563 2.548c-.131-.065-.261-.065-.392-.065-1.175 0-1.83.588-2.939 2.221l.327-2.091h-3.331l-2.157 13.785h3.594c1.307-8.427 1.633-9.865 3.397-9.865h.261c.327-1.633.719-2.874 1.372-3.986l-.132.001zM48.783 45.296c-.98.327-1.764.458-2.614.458-1.83 0-2.874-1.045-2.874-3.006 0-.391.065-.784.13-1.24l.195-1.373.196-1.045 1.568-9.407h3.593l-.392 2.025h1.83l-.523 3.397h-1.829l-.98 5.684c0 .261-.065.458-.065.588 0 .719.392 1.045 1.242 1.045.458 0 .719-.065.98-.131l-.457 3.005zm-13.915-9.211c0 1.698.849 2.939 2.744 3.789 1.502.719 1.698.915 1.698 1.568 0 .849-.653 1.242-2.091 1.242-1.045 0-2.025-.196-3.201-.588l-.523 3.201h.196l.654.131c.296.09.605.134.914.13.849.065 1.568.13 2.025.13 3.789 0 5.553-1.436 5.553-4.573 0-1.894-.718-3.005-2.548-3.855-1.503-.652-1.698-.849-1.698-1.436 0-.784.588-1.176 1.764-1.176.719 0 1.698.13 2.613.261l.523-3.201c-.914-.13-2.352-.261-3.201-.261-4.05-.001-5.422 2.09-5.422 4.638zm73.954 9.407h-3.462l.195-1.372c-.98 1.045-2.026 1.502-3.333 1.502-2.612 0-4.376-2.221-4.376-5.683 0-4.573 2.678-8.428 5.879-8.428 1.438 0 2.483.588 3.462 1.895l.784-4.835h3.594l-2.743 16.921zm-5.358-3.267c1.699 0 2.874-1.894 2.874-4.637 0-1.699-.652-2.679-1.894-2.679-1.633 0-2.81 1.894-2.81 4.638 0 1.764.588 2.678 1.83 2.678zm-43.641 2.941a12.024 12.024 0 01-3.724.588c-4.051 0-6.141-2.157-6.141-6.142 0-4.768 2.679-8.231 6.337-8.231 2.94 0 4.834 1.96 4.834 5.03 0 .98-.13 1.961-.391 3.397h-7.186c-.066.196-.066.261-.066.392 0 1.568 1.045 2.417 3.201 2.417 1.242 0 2.417-.261 3.724-.849l-.588 3.398zm-2.024-8.168v-.718c0-1.111-.589-1.764-1.698-1.764-1.11 0-1.96.914-2.286 2.482h3.984zm-36.65 8.494h-3.593l2.09-13.001-4.639 13.001h-2.482l-.261-12.936-2.221 12.936H6.711L9.52 28.571h5.161l.196 10.453 3.463-10.453h5.618l-2.809 16.921zm8.95-6.141c-.392-.065-.588-.065-.849-.065-2.025 0-3.07.719-3.07 2.091 0 .849.522 1.438 1.306 1.438 1.502-.001 2.548-1.439 2.613-3.464zm2.613 6.141h-3.005l.066-1.438c-.914 1.112-2.091 1.633-3.789 1.633-1.96 0-3.267-1.502-3.267-3.724 0-3.331 2.287-5.292 6.337-5.292.392 0 .914 0 1.437.065.13-.392.13-.587.13-.849 0-.914-.588-1.242-2.286-1.242-1.045 0-2.221.13-3.005.392l-.523.13-.327.065.523-3.07c1.829-.523 3.005-.719 4.311-.719 3.136 0 4.769 1.372 4.769 3.986 0 .719-.066 1.241-.327 2.744l-.718 4.9-.13.849-.066.718-.065.458-.065.394zm54.354-6.141c-.391-.065-.588-.065-.849-.065-2.026 0-3.071.719-3.071 2.091 0 .849.523 1.438 1.307 1.438 1.437-.001 2.548-1.439 2.613-3.464zm2.613 6.141h-3.005l.065-1.438c-.915 1.112-2.155 1.633-3.79 1.633-1.959 0-3.331-1.502-3.331-3.724 0-3.331 2.352-5.292 6.402-5.292.391 0 .915 0 1.436.065.131-.392.131-.587.131-.849 0-.914-.588-1.242-2.287-1.242-1.045 0-2.221.13-3.005.392l-.523.13-.327.065.523-3.07c1.828-.523 3.005-.719 4.311-.719 3.136 0 4.769 1.372 4.769 3.986 0 .719-.065 1.241-.327 2.744l-.719 4.9-.13.849-.131.718-.065.458v.394h.003zm9.67-13.85c-.067-.065-.196-.065-.328-.065-1.175 0-1.894.588-3.005 2.221l.327-2.091h-3.266l-2.222 13.785h3.658c1.242-8.427 1.634-9.865 3.333-9.865h.261c.327-1.633.784-2.874 1.372-3.986l-.13.001z"
            />
        </Svg>
    )
}

export default SvgComponent
