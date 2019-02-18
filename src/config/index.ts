
export const ENVIRONMENT = process.env.NODE_ENV;


class AppConfig {
  public readonly env: string;

  /** 현 사이트 주소 */
  private baseUrl: string;
  /** API Endpoint */
  private apiBaseUrl: string;

  constructor() {
    this.env = process.env.NODE_ENV!;
    this.baseUrl = process.env.VUE_APP_BASE_URL!;
    this.apiBaseUrl = process.env.VUE_APP_API_URL!;
  }

  public isDebugAvailable(): boolean {
    return process.env.NODE_ENV === 'development' ? true : false;
  }

  get ApiUrl(): string {
    return this.apiBaseUrl;
  }

  get BaseUrl(): string {
    return this.baseUrl;
  }
}

export default new AppConfig();
