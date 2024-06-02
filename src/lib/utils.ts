export function setUserId(userId: string): void {
    try {
      localStorage.setItem('userId', userId);
    } catch (error) {
      console.error('Error setting user ID in local storage', error);
    }
  }
  
  export function getUserId(): string | null {
    try {
      return localStorage.getItem('userId');
    } catch (error) {
      console.error('Error getting user ID from local storage', error);
      return null;
    }
  }
  
  export function removeUserId(): void {
    try {
      localStorage.removeItem('userId');
    } catch (error) {
      console.error('Error removing user ID from local storage', error);
    }
  }