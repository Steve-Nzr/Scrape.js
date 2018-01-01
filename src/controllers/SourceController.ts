import {IRoute} from "./RouteController";

export interface ISource
{
    async: boolean;
    name: string;
    routes: IRoute[];
    url: string;
}

class SourceController
{
    private sourceList: ISource[] = [];

    public registerSource(source: ISource): boolean
    {
        let duplicated: boolean = false;

        this.sourceList.forEach((elem: ISource) => {
            if (elem.name === source.name)
                duplicated = true;
        });
        if (!duplicated)
            this.sourceList.push(source);

        return !duplicated;
    }
}

namespace SourceBuilder
{
    export function createSource(name: string, url: string, async: boolean): ISource
    {
        return {
            async,
            name,
            routes: [],
            url,
        };
    }
}

export const sourceController: SourceController = new SourceController();

export function register(name: string, url: string, async: boolean = true): boolean
{
    const source: ISource = SourceBuilder.createSource(name, url, async);
    return sourceController.registerSource(source);
}
