
export interface SiteContent {
    kind: 'site',
    ok: boolean,
    url: string,
    title?: string,
    text?: string,
    error?: string
}

export async function fetchSite (url: string): Promise<SiteContent>{
    return { kind: 'site', ok: false, url}
}