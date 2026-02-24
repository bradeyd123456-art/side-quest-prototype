// ip-manager.js

/**
 * A module for managing and validating approved IP addresses.
 */

class IPManager {
    constructor() {
        // Initializing an empty set for approved IP addresses
        this.approvedIPs = new Set();
    }

    /**
     * Add an IP address to the approved list.
     * @param {string} ip - The IP address to be approved.
     * @returns {boolean} - Returns true if added, false if already exists.
     */
    addApprovedIP(ip) {
        if (this.approvedIPs.has(ip)) {
            console.warn(`IP address ${ip} is already approved.`);
            return false;
        }
        this.approvedIPs.add(ip);
        return true;
    }

    /**
     * Validate if an IP address is in the approved list.
     * @param {string} ip - The IP address to validate.
     * @returns {boolean} - Returns true if valid, false otherwise.
     */
    validateIP(ip) {
        return this.approvedIPs.has(ip);
    }

    /**
     * Remove an IP address from the approved list.
     * @param {string} ip - The IP address to remove.
     * @returns {boolean} - Returns true if removed, false if not found.
     */
    removeApprovedIP(ip) {
        if (!this.approvedIPs.has(ip)) {
            console.warn(`IP address ${ip} is not in the approved list.`);
            return false;
        }
        this.approvedIPs.delete(ip);
        return true;
    }
}

module.exports = IPManager;