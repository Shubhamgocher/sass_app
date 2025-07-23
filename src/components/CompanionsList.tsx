import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import economicsImg from "../public/icons/economics.svg";
import mathsImg from "../public/icons/maths.svg";
import historyImg from "../public/icons/history.svg";
import scienceImg from "../public/icons/science.svg";
import languageImg from "../public/icons/language.svg";
import codingImg from "../public/icons/coding.svg";
import clock from "../public/icons/clock.svg";

import Link from "next/link";
import Image from "next/image";
interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classname: string;
}
const CompanionsList = ({
  title,
  companions,
  classname,
}: CompanionsListProps) => {
  return (
    <article className={`companion-list ${classname}`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg w-2/3">Lessons</TableHead>
              <TableHead className="text-lg">Subject</TableHead>
              <TableHead className="text-lg text-right">Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companions?.map(
              ({ id, name, topic, subject, duration, color }) => (
                <TableRow key={id}>
                  <TableCell>
                    <Link href={`/companions/${id}`}>
                      <div className="flex items-center gap-2">
                        <div
                          className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                          style={{ backgroundColor: color }}
                        >
                          <Image
                            src={scienceImg}
                            //src={economicsImg}
                            alt="subject"
                            width={35}
                            height={35}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="text-xl font-bold">{name}</p>
                          <p className="text-lg">Topic:{topic}</p>
                        </div>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="subject-badge w-fit max-md:hidden">
                      {subject}
                    </div>
                    <div
                      className="flex items-center justify-center w-fit rounded-lg p-2 md:hidden"
                      style={{ backgroundColor: color }}
                    >
                      <Image
                        src={scienceImg}
                        //src={economicsImg}
                        alt="subject"
                        width={18}
                        height={18}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <p className="text-lg ">{duration}</p>
                      <p className="text-lg max-md:hidden">mins</p>
                      <div className="md:hidden">
                        <Image src={clock} alt="clock" width={12} height={12} />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </article>
  );
};

export default CompanionsList;
