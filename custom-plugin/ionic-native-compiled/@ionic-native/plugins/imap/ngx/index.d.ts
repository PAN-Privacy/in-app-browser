import { IonicNativePlugin } from '@ionic-native/core';
export interface Config {
    /**
     * Hostname or IP address of the IMAP service, for example: imap.gmail.com, imap-mail.outlook.com....
     */
    host: string;
    /**
     *  Username or email address for authentication.
     */
    user: string;
    /**
     * Password for authentication.
     */
    password: string;
}
export interface Connection {
    /**
     * Connection Status: true or false, "true" means connected successfully; "false" means failed to connect.
     */
    status: boolean;
    /**
     * Optional parameter. A connection string, returned as a confirmation for successful connection.
     */
    connection?: string;
    /**
     * Optional parameter. Error, returned if the connecting process has failed.
     */
    exception?: string;
}
export interface Message {
    /**
     * Message consecutive number.
     */
    messageNumber: number;
    /**
     * The name of the folder where the message is contained.
     */
    folder: string;
    /**
     * Sender's data.
     */
    from: Address[];
    /**
     * Optional. All recipients data.
     */
    allRecipients?: Address[];
    /**
     * TO recipients data.
     */
    toRecipients: Address[];
    /**
     * CC recipients data.
     */
    ccRecipients: Address[];
    /**
     * BCC recipients data.
     */
    bccRecipients: Address[];
    /**
     * Optional. Reply data.
     */
    replyTo?: Address[];
    /**
     * Optional. Date when the message was sent.
     */
    sentDate?: string;
    /**
     * The date when the message was received.
     */
    receivedDate: string;
    /**
     * Message's subject header.
     */
    subject: string;
    /**
     * Optional. Short description for the message.
     */
    description?: string;
    /**
     * Optional.
     */
    fileName?: string;
    /**
     * Optional.
     */
    disposition?: string;
    /**
     * Message's active flags.
     */
    flags: string;
    /**
     * Optional.
     */
    lineCount?: number;
    /**
     * Optional. All Headers available on a message.
     */
    allMessageHeaders?: object;
    /**
     * Optional. Type of message's content.
     */
    contentType?: string;
    /**
     * Optional. Message's body with its content and attachments.
     */
    bodyContent?: Content[];
    /**
     * Optional. Message's memory size.
     */
    size?: number;
}
export interface Address {
    /**
     * Email address.
     */
    address: string;
    /**
     * Optional. Name of the email address's owner.
     */
    personal?: string;
    /**
     * Data type.
     */
    type: string;
}
export interface Content {
    /**
     * Content data type.
     */
    type: string;
    /**
     * Optional. The name of the file.
     */
    fileName?: string;
    /**
     * Message's content.
     */
    content: string;
}
export interface ModificationResult {
    /**
     * Status of the applied changes. "True" success; "False" failure
     */
    status: boolean;
    /**
     * Array with consecutive numbers of modified messages.
     */
    modifiedMessages: number[];
}
export declare enum Comparison {
    /**
     * The less than or equal to operator.
     */
    LE = "LE",
    /**
     * The less than operator.
     */
    LT = "LT",
    /**
     * The equality operator.
     */
    EQ = "EQ",
    /**
     * The not equal to operator.
     */
    NE = "NE",
    /**
     * The greater than operator.
     */
    GT = "GT",
    /**
     * The greater than or equal to operator.
     */
    GE = "GE"
}
/**
 * All available message flags. Set or remove flag using "setFlag()".
 */
export declare enum FlagEnum {
    /**
     * "ANSWERED" message flag
     */
    ANSWERED = "ANSWERED",
    /**
     * "DRAFT" message flag
     */
    DRAFT = "DRAFT",
    /**
     * "FLAGGED" message flag
     */
    FLAGGED = "FLAGGED",
    /**
     * "RECENT" message flag
     */
    RECENT = "RECENT",
    /**
     * "SEEN" message flag
     */
    SEEN = "SEEN",
    /**
     * "USER" message flag
     */
    USER = "USER",
    /**
     * "DELETED" message flag. Note: Add this flag to delete the message from the mailbox
     */
    DELETED = "DELETED"
}
/**
 * @name Imap
 * @description
 * This plugin will enable an Ionic application to use the IMAP (Internet Message Access Protocol) features.
 * This plugin is in Beta version and it offers support only for Android.
 * The plugin uses Java Mail API.
 * Planned improvements and support for iOS.
 *
 * @usage
 * ```typescript
 * import { Imap } from '@ionic-native/imap/ngx';
 *
 *
 * constructor(private imap: Imap) { }
 *
 * ...
 *
 *
 * this.imap.connect({
 *  host: 'imap.gmail.com',
 *  user: 'my_email@gmail.com',
 *  password: 'my-pass'
 * })
 *   .then((res: Connection) => console.log(res))
 *   .catch((error) => console.error(error));
 *
 *
 *
 *  this.imap.disconnect()
 *   .then((res: boolean) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 *
 *
 * this.imap.isConnected()
 *   .then((res: boolean) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 *  Note: Connected to an IMAP service is REQUIRED to be able to get data from the below functions.
 *
 *
 *   this.imap.listMailFolders()
 *   .then((res: boolean) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 *
 *   this.imap.getMessageCountByFolderName('INBOX')
 *   .then((res: number) => {
 *   // Returns the count of the messages in the folder as a result
 *    console.log(res)
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 *
 *
 *   this.imap.searchMessagesByDatePeriod('INBOX', 1601503200000, Comparison.GE)
 *   .then((res: number[]) => {
 *   // Returns array with messages' consecutive numbers
 *   // ex. [1207, 1208, 1209]
 *    console.log(res)
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 *
 *   this.imap.listMessagesHeadersByConsecutiveNumber('INBOX', 1200, 1280)
 *   .then((res: Message[]) => {
 *   //  Returns array with messages' headers data
 *    console.log(res)
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 *
 *   this.imap.listMessagesHeadersByDate('INBOX', 1601503200000, Comparison.GE)
 *   .then((res: Message[]) => {
 *   // Returns array with messages' headers data
 *    console.log(res)
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 *
 *   this.imap.getFullMessageData('INBOX', 1205)
 *   .then((res: Message) => {
 *   // Returns "Message" object with the full message data including attachments.
 *    console.log(res)
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 *
 *   this.imap.copyToFolder('INBOX', 'Spam', [1204, 1205, 1206, 1207])
 *   .then((res: boolean) => {
 *   // Returns "true" if the process is successful, else returns "false".
 *    console.log(res)
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 *
 *   * Sets a flag on a message
 *   * "setFlag()" can be used for deleting messages setting the Delete flag to "FlagEnum.DELETED"
 *   this.imap.setFlag('INBOX', [1206, 1205, 1204], FlagEnum.SEEN, true)
 *   .then((res: ModificationResult) => {
 *
 *    // res.status - return true or false based on the deletion success
 *
 *   //res.modifiedMessages - for ex.[1206, 1205, 1204];
 *
 *   })
 *   .catch((error: any) => {
 *     console.error(error)
 *   });
 *
 * ```
 */
export declare class Imap extends IonicNativePlugin {
    /**
     * This function "connect(clientData: Config)" tries to connect and authenticate with the IMAP server.
     * @param clientData {Config} Connection configuration
     * @return {Promise<Connection>} Returns a promise with the connection data
     */
    connect(clientData: Config): Promise<Connection>;
    /**
     * "disconnect()" Closes the connection with the server.
     * @return {Promise<boolean>} Returns a promise status.
     */
    disconnect(): Promise<boolean>;
    /**
     * "isConnected()" Checks the current state of the connection.
     * @return {Promise<boolean>} Returns a promise with connection status
     */
    isConnected(): Promise<boolean>;
    /**  Note: Connected to an IMAP service is REQUIRED to be able to get data from the below functions.  */
    /**
     * "listMailFolders()" Lists the name of all the mail folders in the mailbox.
     * @return {Promise<string[]>} Returns array with all folder names.
     */
    listMailFolders(): Promise<string[]>;
    /**
     * "getMessageCountByFolderName(folderName: string)" Gets the count of the messages in the folder.
     * @param folderName {string} The name of the desired folder.
     * @return {Promise<number>} Returns the consecutive number of the last message.
     */
    getMessageCountByFolderName(folderName: string): Promise<number>;
    /**
     * "searchMessagesByDatePeriod(folderName: string, dateInMilliseconds: number, comparison: Comparison)" Returns the messages' consecutive number.
     * @param folderName {string} The name of the desired folder
     * @param dateInMilliseconds {number} Date in milliseconds
     * @param comparison {Comparison} A comparison operator
     * @return {Promise<number[]>} Returns array with the messages' consecutive numbers.
     */
    searchMessagesByDatePeriod(folderName: string, dateInMilliseconds: number, comparison: Comparison): Promise<number[]>;
    /**
     * "listMessagesHeadersByConsecutiveNumber(folderName: string, start: number, end: number)" Returns messages' headers data based on a "start" and "end" message consecutive number.
     * @param folderName {string} The name of the desired folder
     * @param start {number} Consecutive number of the first message.
     * @param end {number} Consecutive number of the last message
     * @return {Promise<Message[]>} Returns array with the messages' headers data.
     */
    listMessagesHeadersByConsecutiveNumber(folderName: string, start: number, end: number): Promise<Message[]>;
    /**
     * "listMessagesHeadersByDate(folderName: string, dateInMilliseconds: number, comparison: Comparison)" Returns messages' headers data based on a date.
     * @param folderName {string} The name of the desired folder
     * @param dateInMilliseconds {number} Date in milliseconds.
     * @param comparison {Comparison} A comparison operator
     * @return {Promise<Message[]>} Returns array messages' headers data.
     */
    listMessagesHeadersByDate(folderName: string, dateInMilliseconds: number, comparison: Comparison): Promise<Message[]>;
    /**
     * "getFullMessageData(folderName: string, messageNumber: number)" Returns the full message's data including its attachments.
     * @param folderName {string} The name the message's folder
     * @param messageNumber {number} Message's consecutive number.
     * @return {Promise<Message>} Returns "Message" object with full message data.
     */
    getFullMessageData(folderName: string, messageNumber: number): Promise<Message>;
    /**
     * "copyToFolder(sourceFolder: string, destinationFolder: string, messageNums: number[])" Copy messages to a desired folder.
     * @param sourceFolder {string} The name of the source folder.
     * @param destinationFolder {string} The name of the destination folder.
     * @param messageNums {number[]} Array with messages' consecutive numbers or array with single message consecutive number.
     * @return {Promise<Message>} Returns boolean status of the process.
     */
    copyToFolder(sourceFolder: string, destinationFolder: string, messageNums: number[]): Promise<boolean>;
    /**
     * "setFlag(folderName: string, messageNums: number[], flag: FlagEnum, status: boolean)" Set or remove flag from a message
     * @param folderName {string} The name of the source folder where the messages are contained.
     * @param messageNums {number[]} Array with messages' consecutive numbers or array with single message consecutive number
     * @param flag {FlagEnum} Desired message flag.
     * @param status {boolean} Set status to "true" to set the flag on a message; or to "false" to remove the flag from the message
     * @return {Promise<ModificationResult>} Returns object with status and array with messages' consecutive numbers of the modified messages
     */
    setFlag(folderName: string, messageNums: number[], flag: FlagEnum, status: boolean): Promise<ModificationResult>;
}