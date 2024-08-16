import ps4 from '@/assets/images/LogoPlatforms/ps4.png'
import xone from '@/assets/images/LogoPlatforms/xone.png'
import x360 from '@/assets/images/LogoPlatforms/x360.png'
import wii from '@/assets/images/LogoPlatforms/wii.png'
import nintendo from '@/assets/images/LogoPlatforms/nintendo.png'

const useMarquee = () => {
    const marqueeData = [ps4, xone, x360, wii, nintendo, ps4, xone, x360, wii, nintendo]

    return { marqueeData }
}

export default useMarquee