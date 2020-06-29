import React from 'react'
import find from 'lodash/find'

export const splitOnSpace = (value) => value
    .split(' ')
    .reduce((acc, s) => { s && acc.push(s); return acc }, []);

export const cleanSpace = (value) => splitOnSpace(value).join(' ');

export function assignIfUndefined(value, overrideValue) {
    return typeof value === 'undefined' ?
        overrideValue :
        value
}

export function customTelephone(input) {
    if (input) {
        let output = input.replace(/ /g, '');

        if (output.substring(0, 4) === "0800" || output.substring(0, 4) === "0860") {
            return output.substr(0, 4) + " " + output.substr(4, 3) + " " + output.substr(7, 3)
        } else if (output.length === 10) {
            return `+27 ${output.substr(1, 2)} ${output.substr(3, 3)} ${output.substr(6, 4)}`
        } else if (output.length === 9) {
            return output.substr(0, 2) + " " + output.substr(2, 3) + " " + output.substr(5, 4)
        } else if (output[0] === '+' && output.length === 13) {
            return output.substr(0, 3) + " (" + output.substr(3, 1) + ")" + output.substr(4, 2) +
                " " + output.substr(6, 3) + " " + output.substr(9, 4)
        } else if (output[0] === '+' && output.length > 13) {
            let countryCodeLength = output.length - 10;
            return output.substr(0, countryCodeLength) + " (" + output.substr(countryCodeLength, 1) + ")" +
                output.substr(countryCodeLength + 1, 2) + " " + output.substr(countryCodeLength + 3, 3) + " " +
                output.substr(countryCodeLength + 6)
        } else if (output.length === 7) {
            return output.substr(0, 3) + " " + output.substr(3)
        }
    }
}

export function titleCase(text) {
    const exceptions = ['vip', '(ood)', '(wol)', '(od)', 'po'];
    if (text) {
        return text.trim().toLowerCase().split(' ').map(token => {
            if (token.length > 0) {
                let token1 = token[1] ? token[1] : '';
                let token0 = token[0] ? token[0] : '';

                return exceptions.findIndex(exceptionToken => exceptionToken === token) === -1 ?
                    token0 === '(' ? token0 + token1.toUpperCase() + token.substring(2) :
                        token0.toUpperCase() + token.substring(1) :
                    token.toUpperCase()
            }

            return ''
        }).join(' ')
    }
    return ''
}

export function toUpperCaseFirstLetter(value) {
    if (value) {
        return `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
    }

    return value
}

export function formatAPIDate(dateText) {
    if (dateText) {
        return `${dateText.substring(8, 10)}/${dateText.substring(5, 7)}/${dateText.substring(0, 4)}`
    }

    return ''
}

export function formatAPICurrency(number, showCents = true, currency = 'R') {
    const numberNegative = number < 0;
    let newNumber = Math.abs(number);
    let cents = Math.round((Math.abs(newNumber) - Math.floor(newNumber)) * 100);
    const modAmount = 1000;
    let tokenArray = [];
    newNumber = Math.floor(newNumber);

    while (newNumber > 0) {
        let token = `${newNumber >= 1000 ? '000' : ''}${newNumber % modAmount}`;
        newNumber -= token;
        newNumber /= modAmount;
        tokenArray.push(token.length > 3 ? token.substr(token.length - 3) : token)
    }

    let returnString = 'R ';
    if (currency === 'USD') {
        returnString = '$ '
    }
    if (tokenArray.length > 0) {
        tokenArray.reverse().forEach((value, index, array) => {
            returnString += `${value}${index < array.length - 1 ? ' ' : ''}`
        })
    }
    else {
        returnString += '0.00'
    }

    if (cents > 0 || showCents) {
        let centString = `0${cents}`;
        returnString += `.${centString.substr(centString.length - 2)}`
    }

    return numberNegative ? `- ${returnString}` : returnString
}

export function fixDecimalSpacesNoRounding(value, decimals) {
    const isValueNegative = value < 0;

    if (!value) {
        if (decimals && decimals > -1) {
            return parseFloat('0').toFixed(decimals)
        }

        return 0
    }

    const itemValueText = value.toString().replace(',', '.');
    const decimalPosition = itemValueText.indexOf('.');
    if (!decimalPosition || decimalPosition === -1) {
        if (decimals && decimals > -1) {
            return parseFloat(itemValueText).toFixed(decimals)
        }

        return parseFloat(itemValueText)
    }

    const left = parseFloat(itemValueText.split('.')[0]);
    const rightString = itemValueText.split('.')[1] + '0000';
    const right = parseFloat(`0.${rightString.substring(0, decimals)}`);
    const result = left >= 0 ?
        (left + right).toFixed(decimals) :
        (left - right).toFixed(decimals);

    return isValueNegative && result > 0 ?
        `${result * -1}` :
        result
}

export function formatAPIPercentage(number) {
    if (number === 0 || number === null) {
        return number
    }

    return number / 10000
}

export function getArrayOfObjects() {
    let result = [];
    const args = Array.from(arguments);

    args.forEach(arg => {
        if (arg) { result.push(arg) }
    });

    if (result.length > 0) {
        return result
    }

    return null
}

export function addTags(childElements) {
    return childElements.map((elm, index) => {
        if (elm) {
            return React.cloneElement(elm, { key: index })
        }
        return elm
    })
}

export function isObjectNullOrEmpty(obj, emptyVals = [0]) {
    return !obj || Object.keys(obj).reduce((returnVal, key) => {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (emptyVals.findIndex(val => val === obj[key]) === -1) {
                return false
            }
        }

        return returnVal
    }, true)
}

export function toTooltipID(label) {
    if (label && label.length > 0) {
        const tokens = label.split(/\s|\(|\)/);
        return tokens.filter(token => token && token.length > 0)
            .map(token => titleCase(token.replace(/[^a-zA-Z0-9]/g, '')))
            .join('')
    }
    return label
}

export function toTagID(label) {
    if (label && label.length > 0) {
        const tokens = label.split(/\s|\(|\)/);
        return tokens.filter(token => token && token.length > 0)
            .map(token => token.toLowerCase())
            .join('-')
    }
    return label
}

const isBlankString = (s) => !(s && s.length);

export function areSimilar(a, b) {
    if (isBlankString(a) && isBlankString(b)) { return true }
    return toLowerCaseRemoveSpace(a) === toLowerCaseRemoveSpace(b)
}
export function toLowerCaseRemoveSpace(value) {
    if (!value) { return value }
    return replaceSpaces(value, '').toLowerCase()
}

export function replaceSpaces(value, character) {
    return value.replace(/\s+/g, character)
}

export function keyToDisplayName(key) {
    return key.split(/(?=[A-Z])/)
        .map(token => titleCase(token))
        .join(' ')
}

export function addEllipsis(text, length) {
    if (length >= text.length) {
        return text
    }
    return text.substr(0, length) + '...'
}

export function onBrowserReady(callback) {
    if (callback instanceof Function) {
        if (document.readyState === "loading") {
            if (document.addEventListener) {
                let readyEventHandle = document.addEventListener('readystatechange', event => {
                    if (event.target.readyState !== "loading") {
                        document.removeEventListener('readystatechange', readyEventHandle);
                        readyEventHandle = null;
                        callback()
                    }
                })
            }
            else {
                document.attachEvent('onreadystatechange', () => {
                    if (document.readyState === 'complete') {
                        document.detachEvent('onreadystatechange', arguments.callee);
                        callback()
                    }
                })
            }
        } else {
            callback()
        }
    }
}

function checkDeathStatus(statusDescription, deathStatusDesriptions) {
    let statusDescriptionMatch = false;
    deathStatusDesriptions.forEach(deathStatusDescription => {
        if (deathStatusDescription.toLowerCase() === statusDescription.toLowerCase()) {
            statusDescriptionMatch = true;
            return statusDescriptionMatch
        }
    });
    return statusDescriptionMatch
}

export function formatBytes(bytes) {
    let i = Math.floor(Math.log(bytes) / Math.log(1024));
    let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + sizes[i]
}

export function toBytes(size) {
    let result;
    if (typeof size === "number") {
        return size
    }
    else if (size) {
        let arr = size.split(' ');
        let number = parseFloat(arr[0]);
        let unit = arr[1];

        switch (unit) {
            case 'B':
                result = number;
                break;
            case 'KB':
                result = number * 1024;
                break;
            case 'MB':
                result = number * 1024 * 1024;
                break;
            default:
                return 0
        }
    }
    return result
}

export function MockFile() {
    //initialize MockFile function to prototype create
}

//used for tests
MockFile.prototype.create = function (name, size, mimeType) {
    const _name = name || "mock.txt";
    const _size = size || 1024;
    const _mimeType = mimeType || 'plain/txt';

    function range(count) {
        let output = "";
        for (let i = 0; i < count; i++) {
            output += "a"
        }
        return output
    }

    let blob = new Blob([range(_size)], { type: _mimeType });
    blob.lastModifiedDate = new Date();
    blob.name = _name;

    return blob
};

//convert base64string object into an instance of a file and append the base64string to the instance
export function dataURLtoFileWithBase64(dataUrl, filename) {
    let arr, mime, bstr, n, u8arr;
    if (dataUrl) {
        arr = dataUrl.split(',');
            mime = arr[0].match(/:(.*?);/)[1];
            bstr = atob(arr[1]);
            n = bstr.length;
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }

    }

    let newFileItem = new File([u8arr ?? 1024], filename ?? '', { type: mime ?? 'plain/txt' });

    newFileItem.base64string = dataUrl;
    newFileItem.path = filename;
    return newFileItem
}

//convert base64string object into an instance of a file
export function dataURLtoFile(dataUrl, filename) {
    let arr, mime, bstr, n, u8arr;
    if (dataUrl) {
        arr = dataUrl.split(',');
            mime = arr[0].match(/:(.*?);/)[1];
            bstr = atob(arr[1]);
            n = bstr.length;
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }

    }
    return new File([u8arr ?? 1024], filename ?? '', { type: mime ?? 'plain/txt' })
}

export function getPhysicalAddress(addresses) {
    return find(addresses, address => {
        return address.usageCode === 'RES'
    })
}

export function getPostalAddress(addresses) {
    return find(addresses, address => {
        return address.usageCode === 'CORR'
    })
}

export function getCellphone(telephones) {
    return find(telephones, telephone => {
        return telephone.facilityCode === 'CELL'
    })
}

export function getHomeNumber(telephones) {
    return find(telephones, telephone => {
        return telephone.facilityCode === 'LL' && telephone.usageCode === 'PVT'
    })
}

export function getWorkNumber(telephones) {
    return find(telephones, telephone => {
        return telephone.facilityCode === 'LL' && telephone.usageCode === 'BUS'
    })
}

export function preformatContactNumber(contactNumber) {
    let formatted = contactNumber?.replace(/\D+/g, "");
    if (formatted?.length === 10 && formatted?.charAt(0) === '0') {
        formatted = formatted?.slice(1, formatted?.length)
    }
    else if (formatted?.length === 11 && formatted?.slice(0, 1) === '27') {
        formatted = formatted?.slice(2, formatted?.length)
    }
    return formatted
}

export function calculatePeriod(startDate, endDate) {
    let years = endDate.diff(startDate, 'years');
    let months = endDate.diff(startDate, 'months');
    return years + ' year(s) and ' + months % 12 + ' month(s)'
}

export function consolidateBankingInfo(portfolioBanking) {
    let observed = [];
    let consolidated = [];

    for (let i = 0; i < portfolioBanking?.length; i++) {
        if (!observed.includes(portfolioBanking[i]?.accountNumber)) {
            consolidated.push(portfolioBanking[i]);
            observed.push(portfolioBanking[i]?.accountNumber)
        }
        else {
            consolidated[observed.indexOf(portfolioBanking[i]?.accountNumber)].policyDetails =
                consolidated[observed.indexOf(portfolioBanking[i]?.accountNumber)]?.
                policyDetails.concat(portfolioBanking[i]?.policyDetails).filter(function (obj) {
                    return this.has(obj.contractNumber) ? false : this.add(obj.contractNumber)
                }, new Set())
        }
    }
    return consolidated
}

export function validateObjectProperties(obj) {
    for (let key in obj) {
        if (obj[key] !== undefined) {
            return obj
        }
    }
    return null
}