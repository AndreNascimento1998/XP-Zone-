import Platform  from "@/types/Platform.ts";

const useCardDetails = () => {
    const platformName: Platform = {
        ps4: 'PlayStation 4',
        xone: 'Xbox One',
        pc: 'PC',
        switch: 'Nintendo Switch',
        ps5: 'PlayStation 5',
        x360: 'Xbox 360',
        xseries_x: 'Xbox Series X',
        xseries_s: 'Xbox Series S',
        wii: 'Nintendo Wii',
        ps3: 'PlayStation 3',
    }

    return { platformName }
}

export default useCardDetails