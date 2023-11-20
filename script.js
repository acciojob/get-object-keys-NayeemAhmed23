//your JS code here. If required.
// Create the student object with a 'name' property
const student = {
    name: 'John Doe',
};

// Add the getKeys() method to the Object prototype
Object.prototype.getKeys = function () {
    // Use Object.keys() to get an array of keys from the current object
    return Object.keys(this);
};
