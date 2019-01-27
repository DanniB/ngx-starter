import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "min" })
export class MinPipe implements PipeTransform {
    transform(value: any, ...args: any[]): number {
        const max: number = Number(String(args.shift() || 0));
        return Math.min(value, max);
    }
}
