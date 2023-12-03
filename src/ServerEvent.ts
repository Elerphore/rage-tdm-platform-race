export class ServerEvent {
    activeEventPlayers : PlayerMp[] = []
    startPoint : Vector3Mp | null = null
    
    addPlayers(_players : PlayerMp[]) {
        this.activeEventPlayers.push(..._players)
    }
    
    public destroyEvent() {
        this.activeEventPlayers = []
    }
    
}