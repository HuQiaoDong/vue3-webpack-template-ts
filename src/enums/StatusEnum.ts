class StatusEnum {
    status: number;
    desc: string;
    static ENABLED: StatusEnum;
    static DISABLED: StatusEnum;
    constructor(status: number, desc: string) {
        this.status = status;
        this.desc = desc;
    }

    getStatus() {
        return this.status;
    }

    getDesc() {
        return this.desc;
    }
}

StatusEnum.ENABLED = new StatusEnum(1, "已启用");
StatusEnum.DISABLED = new StatusEnum(0, "禁用");


Object.freeze(StatusEnum); // 冻结对象，防止修改

export { StatusEnum };
