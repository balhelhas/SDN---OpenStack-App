export class Subnet {
    constructor(
        public name: any,
        public networkId: any,
        public shared: boolean,
        public tenantId: any,
        public ip_version: any,
        public cdir: any,
        public enableDhcp: boolean
    ){}
}