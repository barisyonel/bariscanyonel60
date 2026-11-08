/**
 * Pop-up her sayfa yüklemesinde açılır.
 * Kapatınca sadece o yüklemede gizlenir; sayfayı yenileyince veya
 * siteye yeniden girince tekrar gelir.
 * Eski kalıcı localStorage kaydı temizlenir.
 */
export const WELCOME_PROMO_KEY = "bcy-welcome-promo-dismissed";

let memoryDismissed = false;
const listeners = new Set<() => void>();

function clearPersistentDismiss() {
  try {
    localStorage.removeItem(WELCOME_PROMO_KEY);
    sessionStorage.removeItem(WELCOME_PROMO_KEY);
  } catch {
    /* ignore */
  }
}

export function readWelcomePromoDismissed() {
  clearPersistentDismiss();
  return memoryDismissed;
}

export function dismissWelcomePromo() {
  memoryDismissed = true;
  clearPersistentDismiss();
  listeners.forEach((listener) => listener());
}

export function subscribeWelcomePromo(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
