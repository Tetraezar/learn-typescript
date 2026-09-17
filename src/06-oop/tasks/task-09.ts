/**
 * A school LMS needs to send notifications to students.
 * The system supports three notification types:
 * - Email, example:
 * --------------------------------------------------
 * To: student@example.com
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - SMS, example:
 * --------------------------------------------------
 * To: +628123456789
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - Push Notification, example:
 * --------------------------------------------------
 * Device: ST001
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * Tasks:
 * - Create class Notification with property "message" and method "send()"
 * - Create children class of Notification such as EmailNotification, SMSNotification, PushNotification
 * - each child should override "send()"
 */

class Notification {
    public message: String

    constructor(
        message: String
    ) {
        this.message = message
    }
    send(): void {
        console.log(this.message)
    }
}

class EmailNotification extends Notification {
    email: string

    constructor(email: string, message: string) {
        super(message)
        this.email = email
    }

    send(): void {
        console.log("To:", this.email)
        console.log("Message:", this.message)
    }
}

class SMSNotification extends Notification {
    phone: string

    constructor(phone: string, message: string) {
        super(message)
        this.phone = phone
    }

    send(): void {
        console.log("To:", this.phone)
        console.log("Message:", this.message)
    }
}

class PushNotification extends Notification {
    device: string

    constructor(device: string, message: string) {
        super(message)
        this.device = device
    }

    send(): void {
        console.log("Device:", this.device)
        console.log("Message:", this.message)
    }
}

const emailNotification = new EmailNotification(
    "student@example.com",
    "Your assignment has been graded."
)

const smsNotification = new SMSNotification(
    "+628123456789",
    "Your assignment has been graded."
)

const pushNotification = new PushNotification(
    "ST001",
    "Your assignment has been graded."
)

const notifications: Notification[] = [
    emailNotification,
    smsNotification,
    pushNotification
];

for (const notification of notifications) {
    notification.send();
}