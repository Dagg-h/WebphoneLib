export const mediaDevices = 'mediaDevices' in window.navigator;
export const setSinkId = 'setSinkId' in new Audio();
export const getUserMedia = mediaDevices && 'getUserMedia' in window.navigator.mediaDevices;
// audiocontext?

export const webrtc = {
  connectionstatechange: 'onconnectionstatechange' in RTCPeerConnection.prototype
};

const browserUa: string = navigator.userAgent.toLowerCase();
export const isSafari = browserUa.indexOf('safari') > -1 && browserUa.indexOf('chrome') < 0;
export const isFirefox = browserUa.indexOf('firefox') > -1 && browserUa.indexOf('chrome') < 0;
export const isLocalhost = ['127.0.0.1', 'localhost'].includes(window.location.hostname);
