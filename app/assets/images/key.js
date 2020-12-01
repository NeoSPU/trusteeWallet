
import React from 'react'
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg'

function SvgComponent(props) {
    const color = props.color || '#864DD9';
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
          <G clipPath="url(#clip0)">
            <Path
                fill={color}
                stroke={color}
                d="M11.9331 6.45604C11.3194 5.84179 10.5042 5.50271 9.63809 5.5C9.63484 5.5 9.63159 5.5 9.62834 5.5C8.76492 5.5 7.95405 5.83529 7.34467 6.44467C6.73313 7.05621 6.39784 7.87088 6.4 8.73754C6.40271 9.60367 6.7418 10.4189 7.35605 11.0326C7.9703 11.6463 8.78496 11.9859 9.65109 11.9886C9.65434 11.9886 9.65759 11.9886 9.66084 11.9886C10.5243 11.9886 11.3351 11.6533 11.9445 11.044C12.556 10.4324 12.8919 9.61829 12.8892 8.75108C12.8865 7.88496 12.5468 7.06975 11.9331 6.45604ZM11.268 10.368C10.8395 10.7964 10.2686 11.032 9.66084 11.032C9.65867 11.032 9.65651 11.032 9.65434 11.032C9.04225 11.0304 8.46646 10.7905 8.03259 10.356C7.59871 9.92217 7.35875 9.34638 7.35659 8.73483C7.35496 8.12438 7.59059 7.55129 8.02067 7.12067C8.44913 6.69221 9.02005 6.45658 9.6278 6.45658C9.62996 6.45658 9.63213 6.45658 9.6343 6.45658C10.2458 6.45821 10.8216 6.69817 11.2555 7.13258C11.6894 7.56646 11.9293 8.14225 11.931 8.75379C11.9342 9.36425 11.698 9.93733 11.268 10.368Z"
                strokeWidth={0.8}
            />
            <Path
                fill={color}
                stroke={color}
                d="M17.4793 15.8978L11.9949 10.4135C11.8085 10.2266 11.5052 10.2266 11.3183 10.4135C11.1315 10.6003 11.1315 10.9031 11.3183 11.09L16.4631 16.2348L15.0027 17.6821C14.8153 17.8679 14.8137 18.1707 14.9995 18.3586C15.0932 18.4529 15.2162 18.5 15.3391 18.5C15.461 18.5 15.5823 18.454 15.676 18.3613L17.4776 16.576C17.5681 16.4866 17.619 16.3648 17.619 16.2375C17.6195 16.1096 17.5692 15.9878 17.4793 15.8978Z"
                strokeWidth={0.8}
            />
            <Path
                fill={color}
                stroke={color}
                d="M15.7573 14.1765C15.5704 13.9896 15.2676 13.9896 15.0808 14.1765L13.407 15.8502C13.2201 16.0371 13.2201 16.3399 13.407 16.5268C13.5002 16.6199 13.6226 16.6671 13.745 16.6671C13.8674 16.6671 13.9898 16.6205 14.083 16.5268L15.7568 14.853C15.9442 14.6661 15.9442 14.3628 15.7573 14.1765Z"
                strokeWidth={0.8}
            />
            <Path
                fill={color}
                d="M0 11.9998C0 13.6228 0.32325 15.1745 0.909 16.589C1.518 18.0583 2.409 19.3798 3.51375 20.4845C4.61925 21.5893 5.94 22.4818 7.40925 23.0893C8.82525 23.6765 10.377 23.999 12 23.999C13.623 23.999 15.1748 23.6758 16.5893 23.09C18.0585 22.481 19.38 21.59 20.4848 20.4838C21.5895 19.3775 22.482 18.0583 23.0902 16.589C23.6767 15.1745 24 13.6228 24 11.9998C24 10.3768 23.6767 8.82502 23.091 7.41052C22.482 5.94127 21.591 4.61977 20.4862 3.51502C19.3815 2.41027 18.06 1.51777 16.5908 0.910275C15.1748 0.323774 13.623 0.000522614 12 0.000522614C10.377 0.000522614 8.82525 0.323772 7.41075 0.909523C5.9415 1.51852 4.62 2.40952 3.51525 3.51427C2.4105 4.61902 1.518 5.94052 0.9105 7.40977C0.3225 8.82577 0 10.3768 0 11.9998ZM2.18175 11.9998C2.18175 10.6678 2.4465 9.40027 2.925 8.24527C3.42225 7.04452 4.15125 5.96302 5.058 5.05777C5.96475 4.15252 7.0455 3.42202 8.2455 2.92477C9.4005 2.44702 10.668 2.18152 12 2.18152C13.332 2.18152 14.5995 2.44627 15.7545 2.92477C16.9552 3.42202 18.0367 4.15102 18.942 5.05777C19.8488 5.96452 20.5777 7.04527 21.075 8.24527C21.5527 9.40027 21.8183 10.6678 21.8183 11.9998C21.8183 13.3318 21.5535 14.5993 21.075 15.7543C20.5777 16.955 19.8488 18.0365 18.942 18.9418C18.0352 19.847 16.9545 20.5775 15.7545 21.0748C14.5995 21.5525 13.332 21.818 12 21.818C10.668 21.818 9.4005 21.5533 8.2455 21.0748C7.04475 20.5775 5.96325 19.8485 5.058 18.9418C4.15125 18.035 3.42225 16.9543 2.925 15.7543C2.4465 14.5993 2.18175 13.3318 2.18175 11.9998Z"
            />
          </G>
          <Defs>
            <ClipPath id="clip0">
              <Rect width={24} height={24} />
            </ClipPath>
          </Defs>
        </Svg>
    )
}

export default SvgComponent

