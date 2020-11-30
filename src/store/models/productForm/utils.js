import { formatDate } from 'utils/formatters';

export const formInitialState = {
    name: null,
    type: null,
    minPrice: null,
    maxPrice: null,
    isUnique: false,
    quantity: 1,
    isPureBreed: true,
    breed: '',
    fatherBreed: '',
    motherBreed: '',
    birthWeight: null,
    birthDate: null,
    farmFrom: null,
    houseType: null,
    adg: null,
    fcr: null,
    bft: null,
    lsba: null,
    leftTeats: null,
    rightTeats: null,
    otherDetails: null,
};

export function toRequestDataFormat(values) {

    const {
        name, type, minPrice, maxPrice, isUnique, quantity,
        breed, fatherBreed, motherBreed,
        birthDate,
        birthWeight,
        farmFrom,
        houseType,
        adg,
        fcr,
        bft,
        lsba,
        leftTeats,
        rightTeats,
        otherDetails,
        isPureBreed,
    } = values;

    const requestData = {
        name,
        type: type.key,
        min_price: minPrice,
        max_price: maxPrice,
        is_unique: isUnique ? 1 : 0,
        quantity: isUnique ? 1 : quantity,
        farm_from_id: farmFrom.id,
        birthdate: birthDate ? formatDate(birthDate, 'yyyy-MM-dd') : null,
        breed: isPureBreed
            ? breed
            : `${fatherBreed.toLowerCase()}+${motherBreed.toLowerCase()}`,
        birthweight: birthWeight,
        house_type: houseType ? houseType.key : null,
        adg,
        fcr,
        bft,
        lsba,
        left_teats: leftTeats,
        right_teats: rightTeats,
        other_details: otherDetails,
    };

    return requestData;
}