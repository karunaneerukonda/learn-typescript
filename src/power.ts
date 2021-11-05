export interface Power {
    name: string;
}
export interface GreatPower extends Power {
    isGreatPower: boolean
}

function identityPro<ParamType, FlagType>(param: ParamType, flag: FlagType): ParamType {

    return param;

}

console.log(identityPro<string, boolean>("Hello user", true))